import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
const Header = () => {
  return <header className="w-full max-w-4xl mx-auto px-6 pt-12 pb-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <img src="/lovable-uploads/735224ee-9906-4419-b68e-62796be83544.png" alt="Profile" className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-border" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl mb-2 px-0 mx-[2px] my-px py-px font-light">Sowmith Reddy Yelapati</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Full Stack Developer & Freelancer
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span>Jangoan, Telangana, India</span>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button variant="secondary" size="sm" className="gap-2">
              <FileText className="w-4 h-4" />
              Portfolio
            </Button>
            <Button variant="secondary" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="secondary" size="sm" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="secondary" size="sm" className="gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;