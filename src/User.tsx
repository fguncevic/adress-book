import axios from "axios";
import { useState,useEffect } from "react";

interface User{
    username: string;
    id: number;
    firstname: string;
    lastname: string;
    password: string;
    dob: Date;
    email: string;
}

export const User = () => {
    useEffect(() => {
      fetchPostData();
    }, []);
  
  
    const [users, setUsers] = useState<User[]>([]);
  
    const fetchPostData = async () => {
      try {
        const { data }: { data: User[] } = await axios.get(
          'localhost:8080/users/sensei'
        );
  
        const dataWithValue = data.map((user) => {
          return {
            ...user,
            value: '',
            submittedValue: '',
          };
        })
  
        setUsers(data);
        console.log(data, 'response');
      } catch (err) {
        console.log(err);
      } finally {
        console.log('napokon');
      }
    };
  
    console.log(users);
  
  
    return (
      <>
       
      </>
    );
  };
