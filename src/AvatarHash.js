import React from "react";

import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-jdenticon-sprites';

const AvatarHash = (props) => {
  const { seed } = props;
  const size = props.size || 100;
  let options = {
    dataUri: true,
    width: size
  };
  let avatars = new Avatars(sprites, options);
  let svg = avatars.create(seed);

  return (
    <img src={svg} />
  );
};

export default AvatarHash;
