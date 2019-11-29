import React from "react"
import ContentLoader from "react-content-loader"

const ReposLoader = () => (
  <ContentLoader 
    height={200}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
     <rect x="0" y="10" rx="4" ry="4" width="100%" height="30" />
     <rect x="0" y="50" rx="4" ry="4" width="100%" height="30" />
     <rect x="0" y="90" rx="4" ry="4" width="100%" height="30" />
     <rect x="0" y="130" rx="4" ry="4" width="100%" height="30" />
     <rect x="0" y="170" rx="4" ry="4" width="100%" height="30" />
  </ContentLoader>
)

export default ReposLoader;
