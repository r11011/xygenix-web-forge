
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Rakesh",
    position: "CEO & Co-Founder",
    bio: "With 5 years of experience in IT and Finance, Rakesh leads our company vision and drives innovation in technology solutions.",
    image: "/lovable-uploads/76a22083-4712-4931-bdef-48eae7c26171.png",
  },
  {
    name: "Team Member",
    position: "Position",
    bio: "More details coming soon.",
    image: "/placeholder.svg",
  },
  {
    name: "Team Member",
    position: "Position",
    bio: "More details coming soon.",
    image: "/placeholder.svg",
  },
  {
    name: "Team Member",
    position: "Position", 
    bio: "More details coming soon.",
    image: "/placeholder.svg",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-medium">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet Our Experts</h2>
          <p className="text-gray-600">
            Our team of dedicated professionals is committed to delivering excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 flex items-center justify-center">
                {member.image === "/placeholder.svg" ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-blue-400 text-2xl font-bold">?</span>
                  </div>
                ) : (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                )}
              </div>
              <CardHeader className="pt-5 pb-2">
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {member.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
