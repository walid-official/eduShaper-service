import React from "react";
import QuestionImg from "../../assets/images/question.png"
const Question = () => {
  return (
    // className="py-10 bg-center bg-cover" style={{backgroundImage: `url(https://img.freepik.com/premium-vector/abstract-floral-shape-ornament-design_9148-1926.jpg?ga=GA1.1.1662778785.1716400131&semt=ais_hybrid)`}}
    <div >
      <div className="flex w-11/12 mx-auto pb-20 pt-10">
        <div className="w-[50%]">
            <div className="py-8">
                <div className="flex py-8 gap-3 items-center">
                    <div className="bg-[#8e67f1] w-10 h-1"></div>
                    <h3 className="text-center font-bold">PREMIUM LEARNING</h3>
                    <div className="bg-[#8e67f1] w-10 h-1"></div>
                </div>
                
                <h2 className="font-bold text-4xl">State of the art e-Learning <span className="font-extrabold text-[#8e67f1]">Experience</span> </h2>
            </div>
          <div className="space-y-2">
            <div className="collapse collapse-plus border rounded-none">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-bold">
              Learn at Your Own Pac
              </div>
              <div className="collapse-content">
                <p>Learn at Your Own Pace is a flexible, personalized education service designed to suit your unique learning style and schedule. Whether you're a fast learner or need extra time to grasp complex concepts, this service provides tailored resources and one-on-one support to ensure your success.</p>
              </div>
            </div>
            <div className="collapse collapse-plus border rounded-none">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-bold">
              Learn from the best professionals
              </div>
              <div className="collapse-content">
                <p>Learn from the Best Professionals is a premium education service that connects you with industry-leading experts and seasoned professionals. Gain insights, skills, and knowledge directly from those who excel in their fields, whether it’s academics, technology, arts, or business.</p>
              </div>
            </div>
            <div className="collapse collapse-plus border rounded-none">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-bold">
              Share knowledge and ideas
              </div>
              <div className="collapse-content">
                <p>Share Knowledge and Ideas is a collaborative platform designed to foster a community of learners and innovators. It encourages the exchange of insights, experiences, and creative concepts across diverse fields. Whether through discussions, forums, workshops, or resource sharing, this service empowers individuals to contribute and gain valuable perspectives</p>
              </div>
            </div>
            <div className="collapse collapse-plus border rounded-none">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-bold">
              Connect with a Global Creative Community
              </div>
              <div className="collapse-content">
                <p>Connect with a Global Creative Community is a vibrant platform where artists, innovators, and thinkers from around the world come together to share their talents and collaborate. Engage with diverse perspectives, explore groundbreaking ideas, and build lasting connections with creators who inspire and challenge you</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
            <div className="">
            <img src="https://img.freepik.com/free-vector/violet-banner-design-white-background_1308-93162.jpg?t=st=1734833593~exp=1734837193~hmac=7f50044a646c5b15c47929fdb521435a6578e03e5914adc8f7b256b61c161858&w=1380" alt="" />
            </div>
            {/* <div className="absolute top-60">
            <img src="https://img.freepik.com/free-photo/pleased-friendly-handsome-caucasian-man-casual-outfit-showing-thumbs-up-as-rate-something-good-smiling-nod-agreement-give-positive-feedback-thinking-something-is-excellent_176420-37057.jpg?t=st=1734834573~exp=1734838173~hmac=a2451edc9d46dfbfe6f61b145b9acb770e524bebb5e70cedd99b8cec98b81290&w=996" alt="" />
            </div> */}
            
        </div>
      </div>
    </div>
  );
};

export default Question;
