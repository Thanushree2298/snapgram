import { Models } from "appwrite"
import { Loader } from "./Loader";
import GridPostList from "./GridPostList";


type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({isSearchFetching, searchedPosts}: SearchResultProps) => {
  if(isSearchFetching) return <Loader />

  if(searchedPosts && searchedPosts.length > 0)
  {
    return (
    <div>
      <GridPostList posts={searchedPosts} />
    </div>
  )
  }

  return (
    <p>No results found</p>
  )
  
}

export default SearchResults