namespace :seed_database do
  task :schools => :environment do 
    School.delete_all
    schools_list = JSON.parse(File.read('../locations.json'))
  
    schools_list.each do |school|
      School.create(
        name: school['name'],
        city: school['address__city'],
        state: school['address__state'],
        latitude: school['address__latitude'],
        longitude: school['address__longitude'],
        image_url: school['image_url']
      )
    end
  end
end
