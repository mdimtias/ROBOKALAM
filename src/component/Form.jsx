import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    function handleNameChange(event) {
      setName(event.target.value);
    }
  
    function handleEmailChange(event) {
      setEmail(event.target.value);
    }
  
    function handleSubjectChange(event) {
      setSubject(event.target.value);
    }
  
    function handleMessageChange(event) {
      setMessage(event.target.value);
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        const response = await axios.post('/api/feedback', {
          name,
          email,
          subject,
          message,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="subject"
        >
          Subject
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="subject"
          type="text"
          placeholder="Enter the subject of your message"
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Enter your message"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
        </div>
    );
};

export default Form;