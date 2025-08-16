import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import { CheckCircle, Users, Trophy, BookOpen, Target, Star } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Targeted Practice",
      description: "Practice specific aptitude areas with curated question sets"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Comprehensive Content",
      description: "Cover all major aptitude topics from basics to advanced levels"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics and scores"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Learning",
      description: "Learn with thousands of students preparing for success"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      comment: "Crackit helped me ace my placement tests! The questions are exactly what you face in real exams.",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "MBA Aspirant",
      comment: "The practice modules are well-structured and the progress tracking keeps me motivated.",
      rating: 5
    },
    {
      name: "Sneha Patel",
      role: "Banking Exam Candidate",
      comment: "Best platform for aptitude preparation. Improved my speed and accuracy significantly!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Crackit
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Master Your <span className="text-primary">Aptitude</span> Skills
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join thousands of students who've cracked their dream jobs and entrance exams with our comprehensive aptitude practice platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Start Practicing Free
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    Already a Member?
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={heroImage}
                alt="Students practicing aptitude with Crackit"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="font-semibold">2,847 students cracked interviews this month!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Crackit?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've designed the perfect platform to help you excel in aptitude tests and land your dream job.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See what our students say about their journey with Crackit
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Crack Your Next Exam?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful students and start your journey today. It's free to get started!
          </p>
          <Link to="/register">
            <Button variant="accent" size="xl" className="text-lg px-12">
              Start Your Free Practice Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-2xl font-bold text-primary mb-4">Crackit</div>
          <p className="text-muted-foreground">
            © 2024 Crackit. All rights reserved. Empowering students to achieve their dreams.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;