
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Calendar, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-edu-blue-800 to-edu-purple-900 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Empowering Nepali Youth Through Education
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Discover courses, career guidance, and resources designed to help you succeed in today's competitive world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-edu-blue-800" asChild>
                  <Link to="/career-tools">Career Tools</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600" 
                alt="Students learning together" 
                className="rounded-lg shadow-lg w-full object-cover animate-slide-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-edu-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Courses Available</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-edu-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Students Enrolled</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-edu-blue-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Expert Instructors</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-edu-blue-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Edu Nex Nepal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive education and career support services tailored for Nepali students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-t-4 border-edu-blue-500">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-edu-blue-100 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-edu-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Courses</h3>
                  <p className="text-gray-600">
                    Comprehensive curriculum designed by industry experts focusing on practical skills.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-edu-purple-500">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-edu-purple-100 rounded-full mb-4">
                    <Users className="h-8 w-8 text-edu-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Career Guidance</h3>
                  <p className="text-gray-600">
                    Personalized career counseling and tools to help you choose the right path.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-edu-blue-500">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-edu-blue-100 rounded-full mb-4">
                    <Award className="h-8 w-8 text-edu-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Recognized Certificates</h3>
                  <p className="text-gray-600">
                    Earn certificates recognized by employers and institutions across Nepal.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-edu-blue-600 hover:text-edu-blue-800 font-medium flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Complete Web Development",
                category: "Technology",
                price: "Rs. 12,000",
                instructor: "Ajay Sharma",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Digital Marketing Fundamentals",
                category: "Marketing",
                price: "Rs. 8,500",
                instructor: "Priya Thapa",
                image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "English for Career Growth",
                category: "Language",
                price: "Rs. 6,000",
                instructor: "Robert Wilson",
                image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&h=400"
              }
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium bg-edu-blue-100 text-edu-blue-700 px-2 py-1 rounded">
                      {course.category}
                    </span>
                    <span className="font-semibold text-edu-purple-600">{course.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">Instructor: {course.instructor}</p>
                  <Button className="w-full" asChild>
                    <Link to="/courses">View Course</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-edu-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students about how Edu Nex Nepal has helped them achieve their educational and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sushil Adhikari",
                position: "Software Developer",
                content: "The web development course completely changed my career path. The instructor was knowledgeable and the hands-on projects gave me the confidence to apply for developer positions.",
                avatar: "https://i.pravatar.cc/100?img=1"
              },
              {
                name: "Anita Gurung",
                position: "Marketing Executive",
                content: "I was struggling to find direction in my career until I took the career assessment at Edu Nex. The guidance I received was invaluable and helped me discover my strengths.",
                avatar: "https://i.pravatar.cc/100?img=5"
              },
              {
                name: "Dipak Bhattarai",
                position: "Engineering Student",
                content: "The online courses fit perfectly with my busy schedule. The quality of education and support from teachers is exceptional. I highly recommend Edu Nex to all students.",
                avatar: "https://i.pravatar.cc/100?img=3"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.content}"</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
            <Link to="/blog" className="text-edu-blue-600 hover:text-edu-blue-800 font-medium flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Top 10 In-Demand Skills for Nepali Graduates in 2023",
                category: "Career",
                date: "May 15, 2023",
                excerpt: "Discover the most sought-after skills that employers are looking for in fresh graduates...",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "How to Prepare for Entrance Exams: Expert Tips",
                category: "Education",
                date: "June 2, 2023",
                excerpt: "Learn effective strategies and tips to excel in competitive entrance examinations...",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Studying Abroad vs. Studying in Nepal: Pros and Cons",
                category: "Study Abroad",
                date: "June 10, 2023",
                excerpt: "Weighing your options between studying abroad and staying in Nepal? Read this comprehensive guide...",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?auto=format&fit=crop&w=600&h=400"
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-edu-purple-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link 
                    to="/blog" 
                    className="text-edu-blue-600 hover:text-edu-blue-800 font-medium inline-flex items-center"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-12 bg-edu-purple-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
            <Link to="/events" className="text-edu-purple-600 hover:text-edu-purple-800 font-medium flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Career Fair 2023",
                date: "July 15-16, 2023",
                location: "Kathmandu Exhibition Center",
                description: "Connect with top employers and explore job opportunities across various industries.",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Web Development Workshop",
                date: "July 22, 2023",
                location: "Edu Nex Training Center, Lalitpur",
                description: "Learn the fundamentals of web development in this hands-on workshop led by industry experts.",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Study Abroad Seminar",
                date: "August 5, 2023",
                location: "Hotel Himalaya, Kupondole",
                description: "Get insights about study opportunities in Australia, USA, UK, and other countries.",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=400"
              }
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <Calendar size={16} className="mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{event.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/events">Register Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-edu-blue-700 to-edu-purple-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Join thousands of students who are already benefiting from our courses and career resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="default" className="bg-white text-edu-blue-700 hover:bg-gray-100" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-edu-blue-700" asChild>
              <Link to="/signup">Create Free Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
