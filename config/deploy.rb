##########################
#  PARÁMETROS GENERALES  #
##########################
set :application,  "reticulatorjs-site"
set :repository,   "git@github.com:mamuso/reticulatorjs-site.git"
set :deploy_to,    "/var/www/#{application}"
set :server_group, 'www-data'
set :runner,       'root'
set :user,         'mamuso'

#########
#  SCM  #
#########
set :scm,         :git
set :branch,      "master"
set :scm_verbose, false    # para depurar
set :scm_user,    'deploys'

#####################
# FORMA DE DEPLOYAR #
#####################
set :deploy_via, :copy
set :keep_releases, 3
default_run_options[:pty] = true #supuestamente subsana algún que otro error
ssh_options[:paranoid] = false
set :use_sudo, false
set :keep_releases, 5
#ssh_options[:forward_agent] = true

role :web, "208.75.87.251"
role :app, "208.75.87.251"

namespace :deploy do
  task :restart do
    run "touch #{current_path}/tmp/restart.txt" 
  end
end