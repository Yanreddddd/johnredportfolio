import React, { useState, useContext, createContext, useEffect } from "react";
import { client } from "../../src/client";

const Context = createContext();

export const StateContext = ({ children }) => {
  // Sanity CMS
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [abouts, setAbouts] = useState([]);
  const [works, setWorks] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Work filtering system
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animations
  const [toggle, setToggle] = useState(false);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [tooltip, setTooltip] = useState(false);

  // Sanity fetch data useEffect
  useEffect(() => {
    const query = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setBrands(data);
    });
  });
  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  });

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  });

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  });

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  });

  // Switch logic
  const handleIndex = (index) => {
    setCurrentIndex(index);
  };
  const backward = () => {
    handleIndex(
      Math.max(
        0,
        currentIndex === currentIndex - 1
          ? testimonials.index - 1
          : currentIndex - 1
      )
    );
  };

  const forward = () => {
    if (currentIndex === testimonials.length - 1) {
      return;
    } else {
      handleIndex(
        currentIndex === testimonials.index - 1 ? 0 : currentIndex + 1
      );
    }
  };
  // Contact Form logic
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact,",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log("Oops error found! ->", err));
  };
  // Tags filtering logic
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (activeFilter === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const handleMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Context.Provider
      value={{
        works,
        testimonials,
        brands,
        abouts,
        formData,
        handleMenu,
        toggle,
        setToggle,
        setAbouts,
        activeFilter,
        setActiveFilter,
        animateCard,
        setAnimateCard,
        filterWork,
        setFilterWork,
        handleWorkFilter,
        skills,
        experiences,
        setTooltip,
        tooltip,
        currentIndex,
        setCurrentIndex,
        handleIndex,
        forward,
        backward,
        handleChangeInput,
        handleSubmit,
        loading,
        isFormSubmitted
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
