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
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform">
            Crackit
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-colors">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero" className="shadow-glow hover:shadow-accent hover:scale-105 transition-all duration-300">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-primary/5 to-accent/5 min-h-screen flex items-center">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:bg-primary/20 transition-colors">
                <Star className="w-4 h-4" />
                Trusted by 50,000+ Students
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-tight">
                MASTER THE{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  APTITUDE
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join the fastest growing aptitude practice platform designed by IIT graduates. 
                <span className="text-primary font-semibold"> Practice smarter, not harder.</span>
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Students mastering aptitude with Crackit"
                  className="rounded-3xl shadow-soft w-full transform hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl text-primary px-8 py-3 rounded-full font-bold text-sm shadow-soft border border-primary/20">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    DESIGNED BY IIT GRADUATES & ALUMNI
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/register">
                <Button variant="hero" size="xl" className="w-full sm:w-auto text-lg px-12 shadow-glow hover:shadow-accent hover:scale-105 transform transition-all duration-300">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Practice
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="xl" className="w-full sm:w-auto text-lg px-12 border-2 hover:bg-primary/5 hover:border-primary hover:scale-105 transform transition-all duration-300">
                  Sign In
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12">
              {[
                { number: "50K+", label: "Active Students" },
                { number: "10K+", label: "Practice Questions" },
                { number: "95%", label: "Success Rate" },
                { number: "24/7", label: "AI Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-primary group-hover:text-accent transition-colors">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Completely Free Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-dark via-primary to-primary-glow text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)] opacity-30"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                <Award className="w-4 h-4" />
                Limited Time: Everything Free
              </div>
              <h2 className="text-6xl lg:text-7xl font-extrabold mb-6 text-white">
                COMPLETELY FREE
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                No hidden fees, no premium tiers. Get full access to everything, forever.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { number: "10,000+", label: "Practice Questions", icon: BookOpen },
                { number: "50+", label: "Topic Categories", icon: Target },
                { number: "24/7", label: "AI Support", icon: Clock },
                { number: "100%", label: "Free Forever", icon: Award },
              ].map((item, index) => (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-xl shadow-soft">
                    <CardContent className="p-8 text-center space-y-4">
                      <item.icon className="w-12 h-12 mx-auto text-accent-light group-hover:scale-110 transition-transform" />
                      <div className="text-4xl font-bold text-white">
                        {item.number}
                      </div>
                      <div className="text-sm opacity-90 font-medium">{item.label}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <Link to="/register">
              <Button variant="accent" size="xl" className="text-lg px-16 shadow-accent hover:shadow-glow hover:scale-105 transform transition-all duration-300">
                <Lightbulb className="w-5 h-5 mr-2" />
                GET STARTED FOR FREE
              </Button>
            </Link>
          </div>
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
              <Card key={index} className="group text-center hover:shadow-glow hover:shadow-primary/10 transition-all duration-500 bg-gradient-card border border-primary/10 hover:border-primary/30 hover:scale-105 transform">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
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
              <Card key={index} className="group text-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gradient-to-br from-white via-primary/5 to-accent/5 border-2 hover:border-primary/30 hover:scale-105 transform backdrop-blur-sm">
                <CardHeader className="relative">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-t-lg transition-opacity duration-300"></div>
                  <div className="relative mx-auto w-28 h-28 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-glow group-hover:shadow-accent group-hover:scale-110 transition-all duration-300 border-4 border-white">
                    {mentor.image}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{mentor.name}</CardTitle>
                  <CardDescription className="text-primary font-bold text-lg bg-primary/10 px-3 py-1 rounded-full inline-block mt-2">
                    {mentor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <div className="flex items-center gap-2 justify-center">
                      <Award className="w-4 h-4 text-accent" />
                      <p className="font-semibold">{mentor.experience}</p>
                    </div>
                    <p className="text-sm bg-accent/10 px-3 py-2 rounded-lg font-medium text-accent">
                      {mentor.specialization}
                    </p>
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
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <Card className="relative p-8 bg-gradient-to-br from-white via-primary/5 to-accent/5 border-2 shadow-2xl backdrop-blur-xl hover:shadow-primary/20 transition-all duration-500 transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-sm font-medium text-muted-foreground ml-2">crackit.ai/test</span>
                  </div>
                  <div className="flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
                    <Clock className="h-5 w-5 text-primary animate-pulse" />
                    <span className="font-bold text-primary text-lg">25:30</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">Question 15 of 30</span>
                    <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      85% Accuracy
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-xl leading-relaxed text-foreground">
                    If a train travels 240 km in 3 hours, what is its average speed?
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-xl hover:bg-primary/10 cursor-pointer transition-all duration-300 border-2 border-transparent hover:border-primary/30 hover:scale-[1.02] transform">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center font-semibold">A</div>
                        <span className="font-medium">60 km/h</span>
                      </div>
                    </div>
                    <div className="p-4 bg-primary/15 rounded-xl border-2 border-primary shadow-glow transform scale-[1.02]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">B</div>
                        <span className="font-medium text-primary">80 km/h</span>
                        <CheckCircle className="w-5 h-5 text-primary ml-auto" />
                      </div>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-xl hover:bg-primary/10 cursor-pointer transition-all duration-300 border-2 border-transparent hover:border-primary/30 hover:scale-[1.02] transform">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center font-semibold">C</div>
                        <span className="font-medium">100 km/h</span>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-xl hover:bg-primary/10 cursor-pointer transition-all duration-300 border-2 border-transparent hover:border-primary/30 hover:scale-[1.02] transform">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center font-semibold">D</div>
                        <span className="font-medium">120 km/h</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-6">
                    <Button variant="outline" className="px-8 hover:scale-105 transform transition-all duration-300">Previous</Button>
                    <Button variant="hero" className="px-8 shadow-glow hover:shadow-accent hover:scale-105 transform transition-all duration-300">
                      Next Question
                      <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
                    </Button>
                  </div>
                </div>
              </Card>
              
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-success to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-glow animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  Live Preview
                </div>
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