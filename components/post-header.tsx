import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
