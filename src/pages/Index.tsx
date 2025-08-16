import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-image.jpg";
import { CheckCircle, Users, Trophy, BookOpen, Target, Star, Clock, TrendingUp, BarChart3, PieChart, Award, Zap, Brain, Lightbulb, GraduationCap, ChevronDown, Mail } from "lucide-react";

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
    }
  ];

  const mentors = [
    {
      name: "Dr. Priya Sharma",
      role: "Quantitative Aptitude Expert",
      experience: "15+ years teaching experience",
      specialization: "Mathematical Reasoning & Data Interpretation",
      image: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Logical Reasoning Specialist",
      experience: "12+ years in test preparation", 
      specialization: "Puzzles & Critical Thinking",
      image: "RK"
    },
    {
      name: "Sneha Patel",
      role: "Verbal Ability Coach",
      experience: "10+ years in English coaching",
      specialization: "Reading Comprehension & Grammar",
      image: "SP"
    }
  ];

  const faqs = [
    {
      question: "Is Crackit completely free to use?",
      answer: "Yes! We offer a comprehensive free tier with access to thousands of practice questions, basic analytics, and progress tracking. Premium features are available for advanced learners."
    },
    {
      question: "What types of aptitude tests can I practice?",
      answer: "Our platform covers all major aptitude areas including Quantitative Aptitude, Logical Reasoning, Verbal Ability, Data Interpretation, and General Awareness for various competitive exams."
    },
    {
      question: "How does the progress tracking work?",
      answer: "Our AI-powered system tracks your performance across different topics, identifies weak areas, and provides personalized recommendations to improve your scores."
    },
    {
      question: "Can I access Crackit on mobile devices?",
      answer: "Absolutely! Crackit is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile phones."
    },
    {
      question: "Do you provide detailed solutions for questions?",
      answer: "Yes, every question comes with step-by-step explanations, alternative solving methods, and tips to solve similar problems faster."
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
        <div className="container mx-auto max-w-6xl text-center">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              MASTER THE <span className="text-primary">APTITUDE</span>
            </h1>
            
            <div className="max-w-4xl mx-auto relative">
              <img
                src={heroImage}
                alt="Students mastering aptitude with Crackit"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full font-semibold">
                DESIGNED BY IIT GRADUATES & ALUMNI
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="hero" size="xl" className="w-full sm:w-auto text-lg px-12">
                  Start Free Practice
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="xl" className="w-full sm:w-auto text-lg px-12">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Completely Free Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-8">COMPLETELY FREE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">10,000+</div>
              <div className="text-sm opacity-80">Practice Questions</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm opacity-80">Topic Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm opacity-80">Access</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm opacity-80">Free Forever</div>
            </div>
          </div>
          <Link to="/register">
            <Button variant="accent" size="xl" className="text-lg px-12">
              GET STARTED FOR FREE
            </Button>
          </Link>
        </div>
      </section>

      {/* Crackit AI Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">CRACKIT AI</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our advanced AI system adapts to your learning style, identifies weak areas, and creates personalized study plans to maximize your preparation efficiency.
          </p>
          <Link to="/register">
            <Button variant="accent" size="xl" className="text-lg px-12">
              TRY CRACKIT AI FOR FREE
            </Button>
          </Link>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
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

      {/* Meet Your Mentors Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">MEET YOUR MENTORS</h2>
            <p className="text-xl text-muted-foreground">Learn from industry experts and top performers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted/30">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {mentor.image}
                  </div>
                  <CardTitle className="text-xl">{mentor.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{mentor.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{mentor.experience}</p>
                    <p className="font-medium">{mentor.specialization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Interface Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience Real Test Environment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practice with our realistic test interface that mimics actual exam conditions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Interactive Test Interface</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Real-time timer with exam-like pressure</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Instant feedback and explanations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Adaptive difficulty based on performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Comprehensive question bank</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-6 bg-gradient-to-br from-background to-muted/30 border-2 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Clock className="h-4 w-4" />
                    <span>25:30</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">Question 15 of 30</div>
                  <h4 className="font-semibold text-lg">
                    If a train travels 240 km in 3 hours, what is its average speed?
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors border">
                      A) 60 km/h
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg border-2 border-primary">
                      B) 80 km/h ✓
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors border">
                      C) 100 km/h
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors border">
                      D) 120 km/h
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button variant="outline">Previous</Button>
                    <Button variant="hero">Next Question</Button>
                  </div>
                </div>
              </Card>
              
              <div className="absolute -top-4 -right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-semibold">
                Live Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Crackit Method Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">THE CRACKIT METHOD</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our scientifically proven approach combines adaptive learning, spaced repetition, and real-time feedback to maximize your preparation efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 mx-auto mb-4 text-accent" />
                <CardTitle className="text-lg">ADAPTIVE LEARNING</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">AI adjusts difficulty based on your performance and learning pace</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-accent" />
                <CardTitle className="text-lg">SPACED REPETITION</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">Optimized review schedule to improve long-term retention</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-accent" />
                <CardTitle className="text-lg">REAL-TIME FEEDBACK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">Instant explanations and performance insights after each question</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-accent" />
                <CardTitle className="text-lg">GOAL TRACKING</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">Set targets and track progress towards your dream exam scores</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/register">
              <Button variant="accent" size="xl" className="text-lg px-12">
                START YOUR JOURNEY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">FAQS</h2>
            <p className="text-xl text-muted-foreground">Get answers to commonly asked questions</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

      {/* Ready To Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl lg:text-7xl font-bold mb-8">
            READY <span className="text-accent">TO</span>
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <img
              src={heroImage}
              alt="Ready to start your journey"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
          <p className="text-2xl mb-8 opacity-90">
            CRACK YOUR DREAM EXAM?
          </p>
          <Link to="/register">
            <Button variant="accent" size="xl" className="text-xl px-16 py-4">
              GET STARTED FOR FREE
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">JOIN OUR NEWSLETTER</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get weekly aptitude tips, practice questions, and success strategies delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="flex-1 text-lg py-6"
            />
            <Button variant="accent" size="lg" className="text-lg px-8">
              <Mail className="h-5 w-5 mr-2" />
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, unsubscribe at any time
          </p>
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