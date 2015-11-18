#
# Shared Rakefile. This file is intended to be minimal, and shared across all
# Body Labs projects. Try to avoid adding anything to it directly, preferring
# instead to use `rake/!settings.rake` and `rake/foo.rake` for local code, and
# `devtools_modules.yaml` and dev-tools/rake/bar/foo.rake` for shared code.
#

if ENV['DYNO']
  raise "rake is not set up to run on heroku"
end

if not File.exist? File.expand_path('../dev-tools/devtools.rb', __FILE__)
  if File.exist? File.expand_path('../../dev-tools/devtools.rb', __FILE__)
    raise unless system("ln -s ../dev-tools dev-tools")
  else
    raise unless system("git clone git@github.com:bodylabs/dev-tools.git")
  end
end

require File.expand_path('../dev-tools/devtools', __FILE__)
Dir['rake/*.rake'].each { |file| load(file) }

require_relative './dev-tools/lib/modules'
BodyLabsDevTools::Modules.from_config.each do |name|
  Dir["dev-tools/rake/#{name}/*.rake"].each{ |file| load(file) }
end
