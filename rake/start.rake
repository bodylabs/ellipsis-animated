require_relative '../dev-tools/lib/osx'


$port = 7000


task :default => :start


desc "Run server to serve static files from this folder"
task :start => 'node:require' do
  exec("http-server -a localhost -p #{$port}")
end


desc "Open sample page"
task :open do
  BodyLabsDevTools::OSX.open("http://localhost:#{$port}/tests/", 0.5)
  Rake::Task[:start].invoke
end
