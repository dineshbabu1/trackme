set :application, "trackme.cl"
set :domain,      "198.211.109.82"
set :deploy_to,   "/var/www/#{application}"
set :app_path,    "app"

set :repository,  "git@github.com:ronzalo/trackme.git"
set :scm,         :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `subversion`, `mercurial`, `perforce`, or `none`

set :model_manager, "doctrine"
# Or: `propel`
set :user, "root"
role :web,        domain                         # Your HTTP server, Apache/etc
role :app,        domain                         # This may be the same as your `Web` server
role :db,         domain, :primary => true       # This is where Symfony2 migrations will run

set  :use_sudo,      false
set  :keep_releases,  3

set :update_vendors, true
set :use_composer, true

set :shared_files,      ["app/config/parameters.yml"]
set :shared_children,   [app_path + "/logs", web_path + "/uploads", "vendor"]

set :writable_dirs,       ["app/cache", "app/logs"]
set :webserver_user,      "www-data"
set :permission_method,   :acl
set :use_set_permissions, true

set :dump_assetic_assets, true
set :interactive_mode, false

# Be more verbose by uncommenting the following line
# logger.level = Logger::MAX_LEVEL
set :default_shell, "TERM=dumb /bin/sh"