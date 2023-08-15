from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    bio =  db.Column(db.String)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    concerts = db.relationship('Concert', backref='user')
    festivals =  db.relationship('Festival', backref='user')

    serialize_rules = ('-_password_hash', '-concerts', '-festivals', '-created_at', '-updated_at')

    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))


class Concert(db.Model, SerializerMixin):
    __tablename__ = 'concerts'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id  = db.Column(db.Integer, db.ForeignKey('users.id'))
    venue_id = db.Column(db.Integer, db.ForeignKey('venues.id'))
    band_name = db.Column(db.String)
    opener = db.Column(db.String)
    concert_image = db.Column(db.String)
    setlist_link = db.Column(db.String)
    rating = db.Column(db.Float)
    comments = db.Column(db.String)
    date = db.Column(db.String)


class Venue(db.Model, SerializerMixin):
    __tablename__  = 'venues'

    id = db.Column(db.Integer, primary_key=True)
    venue_name = db.Column(db.String)
    city = db.Column(db.String)
    image = db.Column(db.String)

    concerts = db.relationship('Concert', backref='venue')


class Festival(db.Model, SerializerMixin):
    __tablename__ = 'festivals'

    id = db.Column(db.Integer, primary_key=True)
    user_id  = db.Column(db.Integer, db.ForeignKey('users.id'))
    festival_name = db.Column(db.String)
    city = db.Column(db.String)
    start_date = db.Column(db.String)
    end_date = db.Column(db.String)
    festival_image = db.Column(db.String)
    rating =  db.Column(db.Float)
    comments = db.Column(db.String)

    bands = db.relationship('FestivalBand', backref='festival')


class FestivalBand(db.Model, SerializerMixin):
    __tablename__ = 'festival_bands'

    id = db.Column(db.Integer, primary_key=True)
    festival_id = db.Column(db.Integer, db.ForeignKey('festivals.id'))
    band_name = db.Column(db.String)
    band_image = db.Column(db.String)
    setlist_link = db.Column(db.String)
    rating =  db.Column(db.Float)
    comments = db.Column(db.String)
    headliner = db.Column(db.Boolean)

