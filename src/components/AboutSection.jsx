import { Briefcase, Code, User } from "lucide-react";



export const AboutSection = () => {
return <section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                    Passionate Software Developer & Lifelong Learner
                </h3>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus atque omnis harum nostrum libero magni, hic reprehenderit assumenda modi consequuntur, commodi nam consectetur dignissimos amet! Non est minus veritatis et?
                </p>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et earum, quod placeat ea laborum rerum quidem iure unde voluptatibus excepturi, dolorum architecto nemo deleniti illum! Animi reiciendis minus consequuntur?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Contact Me
                    </a>
                    <a href="" className="cosmic-button px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg"> Web Development </h4>
                            <p className="text-muted-foreground">
                                Creating Responsive websites and applications with modern technologies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Design</h4>
                            <p className="text-muted-foreground">
                                Prioritizing efficient, user-friendly experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg"> Project Management</h4>
                            <p className="text-muted-foreground">
                                Creating full-stack applications with practical use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
};