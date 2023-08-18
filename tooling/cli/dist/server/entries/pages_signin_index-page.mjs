import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { L as Logo } from "../chunks/chunk-a091ce35.js";
import { a as jsxs, j as jsx } from "../chunks/chunk-7df435e3.js";
import "../chunks/chunk-ab44b266.js";
import "react/jsx-runtime";
const LoginDocument = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    Login(email: $email, password: $password)
  }
`;
const SigninPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [login] = useMutation(LoginDocument);
  const signInHandler = async (e) => {
    e.preventDefault();
    await login({
      variables: {
        email: userEmail,
        password: userPassword
      }
    }).then(() => {
      window.location.href = "/learn/";
    }).catch((error) => {
      console.log("Handle Login Mutation Error Here");
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col items-center py-12 px-8 space-y-4",
    children: [/* @__PURE__ */ jsx(Logo, {
      size: "large"
    }), /* @__PURE__ */ jsx("div", {
      className: "text-3xl font-bold font-secondary",
      children: "Sign into your account"
    }), /* @__PURE__ */ jsxs("div", {
      className: "p-8 bg-white rounded-md space-y-6 font-primary sm:w-96",
      children: [/* @__PURE__ */ jsxs("form", {
        onSubmit: signInHandler,
        className: "space-y-6",
        children: [/* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("label", {
            className: "text-sm font-semibold text-left",
            children: "Email address"
          }), /* @__PURE__ */ jsx("input", {
            type: "email",
            id: "Email",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            required: true,
            onChange: (e) => setUserEmail(e.target.value)
          })]
        }), /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("label", {
            className: "text-sm font-semibold text-left",
            children: "Password"
          }), /* @__PURE__ */ jsx("input", {
            type: "password",
            id: "Password",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            required: true,
            onChange: (e) => setUserPassword(e.target.value)
          })]
        }), /* @__PURE__ */ jsx("button", {
          type: "submit",
          className: "h-12 p-2.5 px-4 bg-indigo-800 hover:bg-blue-500 rounded-md w-full",
          children: /* @__PURE__ */ jsx("div", {
            className: "text-sm font-semibold text-white",
            children: "Sign in"
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex justify-center",
        children: /* @__PURE__ */ jsx("a", {
          href: "/learn/forget",
          className: "items-center px-8 w-full text-indigo-800 hover:text-blue-500 text-center font-semibold justify-center",
          children: "Forgot Password"
        })
      })]
    })]
  });
};
function Page() {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-gray-100 min-h-screen",
    children: /* @__PURE__ */ jsx(SigninPage, {})
  });
}
export {
  Page
};
