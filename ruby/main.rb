

puts "AQUIIIII"
puts ARGV[0..1]


#ENV["GITHUB_OUTPUT"] = "daemon=teste"
system('echo "daemon=teste" >> $GITHUB_OUTPUT')