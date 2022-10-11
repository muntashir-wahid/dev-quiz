import React from "react";

const Blog = () => {
  return (
    <section className="text-white p-6 mt-10" style={{ minHeight: "55rem" }}>
      <h1 className="text-4xl text-center mb-12">Welcome to My Blog Page</h1>
      <article className="mb-10">
        <h2 className="text-2xl mb-4">
          What is the purpose of <strong>React Router</strong>?
        </h2>
        <p>
          React Router, and dynamic, client-side routing, allows us to build a
          single-page web application with navigation without the page
          refreshing as the user navigates. React Router uses component
          structure to call components, which display the appropriate
          information.
        </p>
        <p>
          By preventing a page refresh, and using Router or Link, which is
          explained in more depth below, the flash of a white screen or blank
          page is prevented. This is one increasingly common way of having a
          more seamless user experience. React router also allows the user to
          utilize browser functionality like the back button and the refresh
          page while maintaining the correct view of the application.
        </p>
      </article>

      <article className="mb-10">
        <h2 className="text-2xl mb-4">
          How does <strong>Contex API</strong> work?
        </h2>
        <p className="font-medium">
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.
        </p>
        <p>
          In a typical React application, data is passed top-down (parent to
          child) via props, but such usage can be cumbersome for certain types
          of props (e.g. locale preference, UI theme) that are required by many
          components within an application. Context provides a way to share
          values like these between components without having to explicitly pass
          a prop through every level of the tree.
        </p>
      </article>

      <article>
        <h2 className="text-2xl mb-4">
          Learn About <strong>useRef()</strong> hook.
        </h2>
        <p>
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument (initialValue). The returned object
          will persist for the full lifetime of the component.
        </p>
        <p>
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .current property.
        </p>
        <p>
          You might be familiar with refs primarily as a way to access the DOM.
          If you pass a ref object to React, React will set its .current
          property to the corresponding DOM node whenever that node changes.
        </p>
      </article>
    </section>
  );
};

export default Blog;
