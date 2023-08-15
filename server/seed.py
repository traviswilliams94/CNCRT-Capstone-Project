#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Concert, Venue, Festival, FestivalBand

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        
        User.query.delete()
        Venue.query.delete()
        Concert.query.delete()
        Festival.query.delete()
        FestivalBand.query.delete()

        print("Starting user seed...")

        user_1 = User(name='Travis Williams', bio='test bio', username='traviswilliams')
        user_1.password_hash = 'password1234'

        user_2  = User(name='Justine Chapel', bio='justine test bio', username='justinechapel')
        user_2.password_hash = 'password5678'

        print('Committing user data...')
        db.session.add_all([user_1, user_2])
        db.session.commit()

        print('Starting venue seed...')

        venue_1 = Venue(venue_name='Red Rocks', city='Denver, CO', image='https://res.cloudinary.com/veeps/image/upload/t_1280/v1640740445/assets/qbljrk9p2nxixahvkzw7.jpg')
        venue_2 = Venue(venue_name='Mission Ballroom', city='Denver, CO', image='https://missionballroom.com//img/content/slider_01.jpg')

        print('Commiting venue data...')
        db.session.add_all([venue_1, venue_2])
        db.session.commit()

        print('Starting concert seed...')

        concert_1 = Concert(user_id= 1, venue_id= 1, band_name='boygenius', opener='Illuminati Hotties', concert_image='https://s26162.pcdn.co/wp-content/uploads/2023/01/Screen-Shot-2023-01-20-at-10.50.53-AM.png', setlist_link='https://www.setlist.fm/setlist/boygenius/2023/red-rocks-amphitheatre-morrison-co-5ba40bb0.html', rating= 8.0, comments='Very good!', date='August 5th, 2023')
        concert_2 = Concert(user_id= 2, venue_id= 2, band_name='T-Pain', opener='', concert_image='https://i.scdn.co/image/d24e852887071688cdca28b945d7b82a8ef5d4a8', setlist_link='', rating= 7.6, comments='War pigs cover was the best', date='June 17th, 2023')

        print('Commiting concert data...')
        db.session.add_all([concert_1, concert_2])
        db.session.commit()

        print('Starting festival seed...')

        festival_1 = Festival(user_id= 1, festival_name='M3F 2023', city='Phoenix, AZ', start_date='March 3rd, 2023', end_date='March 4th, 2023', festival_image='https://www.azcentral.com/gcdn/presto/2022/11/01/PPHX/c7b6cae7-8fec-40c3-925d-be90967f10ed-M3F_poster.jpg', rating=7.5, comments='a great, small festival whos eproceeds went to charity')

        print('Committing festival seed...')
        db.session.add_all([festival_1])
        db.session.commit()

        print('Starting festival_band seed...')

        festival_band_1 = FestivalBand(festival_id= 1, band_name='Emmit Fenn', band_image='https://media.gettyimages.com/id/989426444/photo/musician-emmit-fenn-performs-at-the-sanjam-annual-block-party-at-oakwood-park-on-july-1-2018.jpg?s=612x612&w=gi&k=20&c=-qn-fcYaNkil-sOEW4kD9vWr-e_uIg-lh9OcaPBoxRQ=', setlist_link='', rating= 9.1, comments='A nice surpise. Wasn;t familiar but he had early Odesza vibes', headliner= False )
        festival_band_2 = FestivalBand(festival_id= 1, band_name= 'Peach Pit', band_image='https://www.vmcdn.ca/f/files/nsnews/images/arts/peach-pit---lead-image-deluxe-232244913(1).jpg', setlist_link='', rating=9.0, comments='So good! Happy I finally saw them, and tey played all my favorites', headliner= False)
       
        print('Committing festival band seed...')
        db.session.add_all([festival_band_1, festival_band_2])
        db.session.commit()