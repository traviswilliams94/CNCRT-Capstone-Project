#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Concert, Venue, Festival, FestivalBand


# Views go here!
class Signup(Resource):

    def post(self):
        data = request.get_json()
        print(data)
        try:
            new_user = User(
                username = data['username'],
                name = data['name'],
                bio = data['bio']
            )
            new_user.password_hash = data['password']
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            return make_response(new_user.to_dict(), 201)

        except:
            return make_response({'error': 'Unprocessable Entity'}, 422)

class CheckSession(Resource):

    def get(self):
        user_id = session.get('user_id')
        
        if not user_id:
            return {'error': 'Unauthorized'}, 401
        
        current_user = User.query.filter(User.id == user_id).first()
        return current_user.to_dict(), 200

class Login(Resource):
    
    def post(self):
        data = request.get_json()

        check_user = User.query.filter(User.username == data['username']).first()
        
        if check_user and check_user.authenticate(data['password']):
            session['user_id'] = check_user.id

            return make_response(check_user.to_dict(), 200)
        return {'error': 'Unauthorized'}, 401

class Logout(Resource):

    def delete(self):
        
        if session.get('user_id'):
            session['user_id'] = None
            return {}, 204
        return {'error': '401 Unauthorized'}, 401


class Concerts(Resource):
    def get(self):
        concerts =  [concert.to_dict() for concert in Concert.query.all()]
        return make_response(user_concerts, 200)

    def post(self):
        data  = request.get_json()

        new_concert = Concert(
            user_id = session.get('user_id'),
            band_name = data['band_name'],
            venue = data['venue_id'],
            opener = data['opener'],
            date = data['date'],
            concert_image = data['concert_image'],
            setlist_link = data['setlist_link'],
            rating = data['rating'],
            comments = data['comments'],
        )

        db.session.add(new_concert)
        db.session.commit()

        return make_response(new_concert.to_dict(), 201)

class ConcertsByUser(Resource):
    def get(self, user_id):
        user_id = session.get('user_id')
        user_concerts =  [concert.to_dict() for concert in Concert.query.filter(Concert.user_id == user_id)]
        return make_response(user_concerts, 200)


class ConcertsByID(Resource):
    def delete(self, id):
        concert_to_delete = Concert.query.filter(Concert.id == id).first()

        if concert_to_delete:
            db.session.delete(concert_to_delete)
            db.session.commit()

            return make_response({},204)
        else:
            return {'error': 'Not found'}, 404

    def patch(self, id):
        concert_to_update = Concert.query.filter(Concert.id == id).first()
        if concert_to_update:
            # data = request.get_json()
            for key in request.json:
                setattr(concert_to_update, key, request.json[key])

            db.session.add(concert_to_update)
            db.session.commit()

            return make_response(concert_to_update.to_dict(), 202)
            
        else:
            return {'error': 'Concert not found'}, 404

## venues
class Venues(Resource):
    def get(self):
        venues = [venue.to_dict() for venue in Venue.query.all()]
        return make_response(venues, 200)

    def post(self):
        data = request.get_json()

        new_venue = Venue(
            venue_name = data['venue_name'],
            city = data['city'],
            image = data['image'],
        )

        db.session.add(new_venue)
        db.session.commit()

        return make_response(new_venue.to_dict(), 201)

class Festivals(Resource):
    def get(self):
        festivals =  [festival.to_dict() for festival in Festival.query.all()]
        return make_response(user_festivals, 200)

    def post(self):
        data = request.get_json()

        new_festival = Festival(
            user_id = session.get('user_id'),
            festival_name = data['festival_name'],
            city= data['city'],
            start_date = data['start_date'],
            end_date = data['end_date'],
            rating = data['rating'],
            image =  data['image'],
            comments  =  data['comments'],
        )

        db.session.add(new_festival)
        db.session.commit()

        return make_response(new_festival.to_dict(), 201)

class FestivalBands(Resource):
    def post(self):
        data = request.get_json()

        new_festival_band = FestivalBand(
            festival_id = data['festival_id'],
            band_name = data['band_name'],
            headliner = data['headliner'],
            band_image = data['image'],
            setlist_link = data['setlist_link'],
            rating = data['rating'],
            comments = data['comments'],
        )

        db.session.add(new_festival_band)
        db.session.commit()

        return make_response(new_festival_band.to_dict(), 201)

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'

api.add_resource(Concerts, '/concerts')
api.add_resource(ConcertsByID, '/concerts/<int:id>')
api.add_resource(Venues,  '/venues')
api.add_resource(Festivals, '/festivals')
api.add_resource(FestivalBands, '/festivalbands')


api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

