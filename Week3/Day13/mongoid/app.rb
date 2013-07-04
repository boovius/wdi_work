require 'mongoid'

ENV['MONGOID_ENV'] = 'development' #environment variable 
Mongoid.load!("mongoid.yml")

# MyLife.create!
# MyLife.print

class MyLife

	
	def self.create!
		puts 'hello MyLife'
		
		life = Timeline.new
		life.first_name = 'josh'
		life.last_name = 'book'
		life.date_of_birth = '12/23/1983'
		year = life.years.new
		year.year = '1983'
		event = year.events.new 
		event.event_description = "won counties"

		#year2 = life.years.new
		life.save
		
		

	end


end

class Timeline
	include Mongoid::Document 

	field :first_name, type: String
	field :last_name, type: String
	field :date_of_birth, type: String

	embeds_many :years

end

class Year
	include Mongoid::Document 

	field :year, type: String

	embedded_in :timeline
	embeds_many :events
end

class Event
	include Mongoid::Document

	field :event_title,  type: String
	field :event_place,  type: String
	field :event_start_date,  type: String
	field :event_end_date,  type: String
	field :event_description,  type: String 

	embedded_in :years
	embeds_many :associates

end

class Associate
	include Mongoid::Document 

	field :name_first, type: String
	field :name_last, type: String
	field :date_of_birth, type: String

	embedded_in :event 

end



