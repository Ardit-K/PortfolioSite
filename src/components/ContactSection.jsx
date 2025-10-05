import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";


export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {

        }, 1500);
    }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? My inbox is always open. 
                Whether you have a question, a collaboration idea, or just want to 
                chat about tech, feel free to reach out. I look forward to connecting with you!
            </p>

            <div className="grid grid-cols-1 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex justify-center items-start space-x-4">
                            {/* <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div> */}
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto:arditkoti7192@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    arditkoti7192@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-start space-x-4">
                            {/* <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div> */}
                            <div>
                                <h4 className="font-medium"> Phone </h4>
                                <a href="tel:+13477550064" className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (347)-755-0064
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-start space-x-4">
                            {/* <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div> */}
                            <div>
                                <h4 className="font-medium"> Location </h4>
                                    New York, NY
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/ardit-koti/" target="_blank">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                    <form className="space-y-6" action="">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="FirstName LastName"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="abc@gmail.com"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea
                            type="text" 
                            id="message" 
                            name="message" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder=". . ."/>
                        </div>

                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                            ""
                        )}>
                            Send Message
                            <Send size={16}/>  
                        </button>
                    </form>
                </div> */}
            </div>
        </div>
    </section>;
}