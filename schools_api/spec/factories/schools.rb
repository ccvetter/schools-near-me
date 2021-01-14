FactoryBot.define do 
  factory :school do 
    name { Faker::University.name }
    address__city { Faker::Address.city }
    address__state { Faker::Address.state }
    address__latitude { Faker::Address.latitude }
    address_longitude { Faker::Address.longitude }
    image_url { Faker::Internet.url }
  end
end