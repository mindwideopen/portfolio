import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    height?: string
    textAlign?: string,
    backgroundColor?:string,
    gap?: string,
    width?: string,
    position?: string,
    alignContent?: string,
    margin?: string




}

const FlexWrapper = styled.div<FlexWrapperPropsType>`
  
  
  
  display: flex;
    flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-content: ${props => props.alignContent || 'flex-start'};;
  align-items: ${props => props.align || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  min-height: ${props => props.height || 'auto'};
  text-align:${props => props.textAlign || 'left'}; 
  gap: ${props => props.gap || '0'};
  max-width: ${props => props.width || 'auto'};
  position: ${props => props.position};
  margin: ${props => props.margin};
  
  
  
  
 
`


export default FlexWrapper;