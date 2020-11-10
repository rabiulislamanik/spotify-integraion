import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import { ICategoriesResponse, ICategoryItem } from '../../custom-types/spotifyreponse';
import axios from 'axios'; 
import { categoriesUrl } from '../../consts/spotifyUrls';
import CardContainer from '../miscellaneous/CardContainer';
import CategoryCard from '../miscellaneous/CategoryCard';

function SongCategories() {
  const authContext = useContext(AuthContext);

  const initialCategories:ICategoryItem[] = [];
  const [categories, setCategories]: [ICategoryItem[], (categories: ICategoryItem[]) => void] = useState(initialCategories);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  const [nextUrl, setNextUrl]: [string|null, (total: string|null) => void] = useState<string|null>(null);

  useEffect(() => {
    fetchCategories(categoriesUrl);
  }, []);

  const handleLoadMore = () =>{
    if(!nextUrl)return;
    setLoading(true);
    fetchCategories(nextUrl);
  }

  const fetchCategories = (url:string)=>{
    axios.get<ICategoriesResponse>(url,
      {
        headers: {
          'Authorization': `Bearer ${authContext.user?.access_token}`
        }
      }
      )
      .then(response => {
        if(response){
          setCategories([...categories,...response.data.categories.items]);
          setLoading(false);
          setNextUrl(response.data.categories.next);
        } 
      })
      .catch(error => {
        const errorMessage =
        error.response.status === 401
          ? "Not Authorized"
          : "An unexpected error has occurred";
        setError(errorMessage);
        setLoading(false);
      });
  }
   
  return (
    <div>
      {!loading && categories.length!==0 && (<h1>Categories</h1>)}
      <CardContainer>
      {categories.map((category,i) => (
        <CategoryCard category={category} key={category.name+i}/>
      ))}
      </CardContainer>

      {loading && categories.length===0 &&(<h1>Loading...</h1>)}
      {!loading && error && (<p className="error-message">{error}</p>)}
      {nextUrl && (<button className="load-more" onClick={handleLoadMore}>Load More</button>)}
      {loading && categories.length>0 && (<p className="error-message">{error}</p>)}
    </div>
  );
}

export default SongCategories;
