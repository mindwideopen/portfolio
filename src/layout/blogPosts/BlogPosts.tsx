import React from 'react';
import FlexWrapper from "../../assets/components/flexwrapper/FlexWrapper";
import SectionTitle from "../../assets/components/sectionTitle/SectionTitle";
import styled from "styled-components";



export const BlogPosts = () => {
    return (
        <BlogPostsStyled>
            <SectionTitle text={'Blog Posts'}/>
            <PostsStyled>
                <Post>
                    <Date>
                        <Day/>
                        <Month/>
                    </Date>
                    <Text>

                    </Text>
                    <ReadMe/>
                </Post>

            </PostsStyled>



        </BlogPostsStyled>

    );
};


const BlogPostsStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  max-width: 1236px;
  margin: 0 auto;

`


const PostsStyled = styled.div`
  border: 1px solid black;
  min-height: 389px;
  width: 100%;
  display: flex;
  flex-direction: column;


`

const Post= styled.div`
    flex-grow: 1;
  display: flex;
    

`

const Date = styled.div`

`
const Day = styled.span`

`

const Month = styled.span`
`

const Text = styled.p`
    
    
`
