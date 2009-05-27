# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_typeabit_session',
  :secret      => '6cf66bc216c4cf0dd7bb6d6f2d32989310fd962e9aa8fee07211689cce72c19cd0145fbf830d2f8e1b477e43ec729c7436b5f398a3c57f1452c9175c8f36b67a'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
