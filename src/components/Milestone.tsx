
import { PartyPopper as Celebration, Milestone as MilestoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Milestone = () => {
  const achievements = [
    {
      title: "Company Founded",
      date: "May 2024",
      description: "Xygenix Tech Solutions was established with a mission to revolutionize Web3 technology solutions."
    },
    {
      title: "First Major Client",
      date: "July 2024",
      description: "Secured our first enterprise client, implementing blockchain solutions for their supply chain."
    },
    {
      title: "Team Expansion",
      date: "September 2024",
      description: "Expanded our team to 15 dedicated professionals specializing in various Web3 technologies."
    },
    {
      title: "First Anniversary",
      date: "May 2025",
      description: "Celebrating one year of innovation, growth, and successful client partnerships."
    }
  ];

  return (
    <section id="celebration" className="py-20 bg-gradient-to-b from-Xygenix-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 bg-Xygenix-100 text-Xygenix-600 px-4 py-2 rounded-full">
            <Celebration className="mr-2" size={20} />
            <span className="font-medium">First Anniversary Celebration!</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Celebrating Our First Year</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're proud to celebrate our first year of delivering cutting-edge Web3 solutions. 
            Thank you to our clients, partners, and team for making this journey possible!
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-Xygenix-300 to-Xygenix-600"></div>
          
          <div className="space-y-16 md:space-y-0">
            {achievements.map((achievement, index) => (
              <div key={index} className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition duration-300 hover:scale-105 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                    <span className="text-Xygenix-600 font-medium">{achievement.date}</span>
                    <h3 className="text-xl font-bold mt-2">{achievement.title}</h3>
                    <p className="text-gray-600 mt-2">{achievement.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-Xygenix-500 border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2 z-10">
                  <MilestoneIcon size={16} className="text-white" />
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-Xygenix-100 to-Xygenix-200 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Join Us in Celebrating!</h3>
            <p className="text-gray-700 mb-6">
              To mark our first anniversary, we're offering special consultation packages for new clients.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-gradient-to-r from-Xygenix-500 to-Xygenix-700 hover:from-Xygenix-600 hover:to-Xygenix-800 text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                Get Anniversary Offer
              </Button>
              <Button 
                variant="outline" 
                className="border-Xygenix-500 text-Xygenix-600 hover:bg-Xygenix-50"
                onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
