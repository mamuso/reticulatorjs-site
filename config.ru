require 'rubygems'
require 'sinatra'

set :environment, :production

require 'reticulatorsite.rb'
run Sinatra::Application
