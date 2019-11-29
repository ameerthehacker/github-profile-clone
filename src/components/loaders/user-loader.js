import React from "react"
import ContentLoader from "react-content-loader"

const UserLoader = () => (
  <ContentLoader 
    height={60}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="65" y="10" rx="4" ry="4" width="117" height="6" /> 
    <rect x="65" y="30" rx="3" ry="3" width="85" height="6" /> 
    <rect x="5" y="5" rx="3" ry="3" width="50" height="50" /> 
  </ContentLoader>
)

export default UserLoader;
