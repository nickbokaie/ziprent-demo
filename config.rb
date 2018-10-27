# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Livereload
activate :livereload

# Pretty URLs
activate :directory_indexes

#Image optimizer
activate :imageoptim

configure :build do
  activate :minify_css
  activate :minify_html
end



