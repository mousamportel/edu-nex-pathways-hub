
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const courses = [
    {
      id: 1,
      title: "Grade 10 Complete Course",
      description: "Comprehensive online classes covering all subjects for SEE preparation with practice tests and problem-solving sessions.",
      grade: "10",
      type: "online",
      subjects: ["Mathematics", "Science", "English", "Nepali", "Social Studies"],
      price: 4500,
      duration: "9 months",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Grade 9 Complete Course",
      description: "Structured online classes with interactive sessions, regular assessments, and concept-based learning for grade 9 students.",
      grade: "9",
      type: "online",
      subjects: ["Mathematics", "Science", "English", "Nepali", "Social Studies"],
      price: 4000,
      duration: "9 months",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Grade 8 Complete Course",
      description: "Foundation-building online classes with focus on conceptual clarity and practical application for grade 8 students.",
      grade: "8",
      type: "online",
      subjects: ["Mathematics", "Science", "English", "Nepali", "Social Studies"],
      price: 3500,
      duration: "9 months",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Mathematics Mastery - Grade 10",
      description: "Specialized online class focusing on advanced mathematics concepts and problem-solving techniques for SEE preparation.",
      grade: "10",
      type: "online",
      subjects: ["Mathematics"],
      price: 2000,
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      title: "Science Explorer - Grade 9",
      description: "In-depth online science classes covering physics, chemistry and biology with virtual lab demonstrations for grade 9.",
      grade: "9",
      type: "online",
      subjects: ["Science"],
      price: 1800,
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=60"
    }
  ];

  const filteredCourses = activeFilter === "all" 
    ? courses 
    : courses.filter(course => course.grade === activeFilter);

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-6">Our Online Classes</h1>
      <div className="prose max-w-none mb-8">
        <p className="text-lg mb-4">
          Explore our structured online classes designed to help students in grades 8, 9, and 10 excel in their academics with interactive learning.
        </p>
        <p className="mb-8">
          Our experienced teachers provide comprehensive coverage of the curriculum with regular assessments and doubt-clearing sessions.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <div className="flex justify-center mb-6">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setActiveFilter("all")}>All Classes</TabsTrigger>
            <TabsTrigger value="10" onClick={() => setActiveFilter("10")}>Grade 10</TabsTrigger>
            <TabsTrigger value="9" onClick={() => setActiveFilter("9")}>Grade 9</TabsTrigger>
            <TabsTrigger value="8" onClick={() => setActiveFilter("8")}>Grade 8</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="10" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="9" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="8" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface CourseProps {
  course: {
    id: number;
    title: string;
    description: string;
    grade: string;
    type: string;
    subjects: string[];
    price: number;
    duration: string;
    image: string;
  }
}

const CourseCard: React.FC<CourseProps> = ({ course }) => {
  return (
    <Card className="card-hover overflow-hidden flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl">{course.title}</CardTitle>
          <Badge variant="outline" className="bg-edu-purple-100 text-edu-purple-800">Grade {course.grade}</Badge>
        </div>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {course.subjects.map((subject, index) => (
            <Badge key={index} variant="secondary" className="bg-edu-blue-100 text-edu-blue-700">
              {subject}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <GraduationCap size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={16} />
            <span>Online</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <div className="font-semibold">NPR {course.price}</div>
        <Button>Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default Courses;
