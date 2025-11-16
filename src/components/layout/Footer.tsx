import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import farmikLogo from "@/assets/farmik-oils-logo.png";
import terms from "@/assets/farmik terms&conditions.pdf";
import policy from "@/assets/farmik policy doc.pdf";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={farmikLogo} 
                alt="Farmik Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-primary">Farmik</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              best quality cold-pressed oils, traditionally extracted to preserve natural nutrients and authentic taste. 
              Pure, healthy, and rich in omega-3 fatty acids.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BCyGmgruR/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/farmik.oils/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/Farmikoils" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/terms"  className="text-muted-foreground hover:text-primary transition-colors"> Terms & Conditions</a> <br />
                <a href="/policies" className="text-muted-foreground hover:text-primary transition-colors" >Farmik policies</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 8287317599</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:care@myfarmik.com?subject=Inquiry&body=Hello, I would like to know more about..."><span>care@myfarmik.com</span></a>
               
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1" />
                
                <span> VEBRU <br /> B-4 sector-60 <br />Noida, uttar pradesh - 201301, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Farmik. All rights reserved. | best quality Cold-Pressed Mustard Oil | Best Quality Healthy Oils
          </p>
          
        </div>
      </div>
    </footer>
  );
};