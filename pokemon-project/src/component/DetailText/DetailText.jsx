import React from 'react'

const DetailText = ({data}) => {
    const firstKoreanEntry = data?.flavor_text_entries.find(entry => entry.language.name == 'ko');
  return (
    <div>
        <h3>{data?.names[2].name}</h3>
        <div>{data?.genera[1].genus}</div>
        <div>{firstKoreanEntry?.flavor_text}</div>
    </div>
  )
}

export default DetailText