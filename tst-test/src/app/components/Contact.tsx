import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import contact from "../../../public/undraw_contact_us_re_4qqt.svg";

const Contact = () => {
  return (
    <>
      <div
        className="container min-h-screen pt-20 grid grid-cols-1 md:grid-cols-2 gap-10"
        id="contact"
      >
        <div className="space-y-10">
          <p className="font-bold text-4xl text-mythemes-darkPurple text-center">
            Let's Talk With Us.
          </p>
          <div className="flex justify-center">
            <Image alt="Contact Us Illustration" src={contact} />
          </div>
          <div className="text-center space-y-5 w-full md:w-[500px] mx-auto">
            <p className="mx-auto font-light">
              Have questions, comments, or suggestions? We’re here to help!
              Simply fill in the form below, and we’ll get back to you shortly.
              Let's connect and discuss how VAN's ERP can support your business
              needs.
            </p>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="text-mythemes-mainPurple" />
              <p>Jl. Sesama, no.666, Satusama, Duasama, Tigasama</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="text-mythemes-mainPurple" />
              <p>+62 888 8888 8888</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="text-mythemes-mainPurple" />
              <p>adminsukaria@vans.com</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="w-full md:w-[500px] md:h-fit py-8 shadow-xl">
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  placeholder="First Name*"
                  type="text"
                  className="w-full"
                />
                <Input
                  placeholder="Last Name*"
                  type="text"
                  className="w-full"
                />
              </div>
              <Input placeholder="Email*" type="email" className="w-full" />
              <Input
                placeholder="Phone Number*"
                type="number"
                className="w-full"
              />
              <Textarea placeholder="Your Message*" className="w-full" />
              <Button className="bg-mythemes-mainPurple w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;
