/* eslint-disable import/no-anonymous-default-export */
export default {
  get: jest.fn().mockResolvedValue(() => Promise.resolve(mockResoponse)),
};

const mockResoponse = {
  data: [
    {
      id: 12,
      title: "Dropshipping",
      author: "James Moore",
      category: "Education",
      image: "/assets/img/9.png",
      status: "explore",
    },
    {
      id: 13,
      title: "Being Boss",
      author: "Kathleen Shannon",
      category: "Education",
      image: "/assets/img/10.png",
      status: "explore",
    },
    {
      id: 14,
      title: "Bring Your Human to Work",
      author: "Erica Keswin",
      category: "Entrepreneurship",
      image: "/assets/img/1.png",
      status: "explore",
      value: 0,
    },
    {
      id: 2,
      title: "Beyond Entrepreneurship",
      author: "Jim Collins & Bill Lazier",
      image: "/assets/img/2.png",
      status: "explore",
      value: 0,
    },
    {
      id: 16,
      title: "Lives of the Stoics",
      author: "Ryan Holiday, Stephen Hansel",
      category: "Science",
      image: "/assets/img/5.png",
      status: "explore",
      value: 50,
    },
    {
      id: 17,
      title: "Loving Your Business",
      author: "Debbie King",
      category: "Health",
      image: "/assets/img/6.png",
      status: "explore",
      value: 0,
    },
    {
      id: 18,
      title: "Employee to Entrepreneur",
      author: "Steve Glaveski",
      category: "Entrepreneurship",
      image: "/assets/img/11.png",
      status: "explore",
      value: 0,
    },
  ],
};
