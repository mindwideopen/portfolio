import React from 'react';
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";
import SectionTitle from "../../assets/components/sectionTitle/SectionTitle";
import styled from "styled-components";



export const BlogPosts = () => {
    return (
        <BlogPostsStyled>

            <FlexWrapper direction={'column'} align={'center'} justify={'space-between'} height={'670px'}>
                <SectionTitle text={'Blog Posts'}/>
                <Posts/>
                <button>Read All Blogs</button>

            </FlexWrapper>
        </BlogPostsStyled>



    );
};

const BlogPostsStyled = styled.section`
border: 1px solid black;
  background-color:yellowgreen ;
  min-width: 990px;
  margin-bottom: 158px;
`

const Post  = () => {
    return (
        <FlexWrapper justify={'space-around'} height={'130px'} >
            <PostStyled>
                <span>09</span>
                <span>Feb</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elite.</span> <a href="#"><button>Read More </button> </a>  <a href="#"><span>&#8599;</span></a>
            </PostStyled>
        </FlexWrapper>
    )
}

const Posts = () => {
    return (
        <FlexWrapper direction={'column'} height={'390px'} >
            <Post/>
            <Post/>
            <Post/>
        </FlexWrapper>
    )
}


const PostStyled = styled.div`
box-sizing: border-box;
  border: 1px solid black;

`