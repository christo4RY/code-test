import { useGetCategoriesQuery } from "@/services/api/productApi";
import { MdOutlineSearch } from "react-icons/md";

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <img
        className="w-full h-full"
        src="https://s3-alpha-sig.figma.com/img/6275/bb76/ece8968cdcdf596974ac337cd50b9bc7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3Vi5abzVcoL3W0jBoizlWXxMc9H17yaLK6emJpEbu7ojfPsEIh1nAEsacUDPqTfjrjBp7I44xTTu8oK7vGvaMqH9Yk60XEUu325P4ywQgabePYh4key29teDj0t7oEJm2hkssQjW9awd1pI7X4kZnmnH7MLsWUcNPgKD2QOgDBKue2z-CV91UTOR19~64xBQ4YtLk4KjlKmdXL1E~TbNqnox8fPlPGZIntcLq6WGGs5QtYCFH81Ldw4vJmmD3YJ3RAUwKLBL3U0gyd9o763-4zxHAXdnGeQpTEYonSP8kfsk1~qjpgV9mGV4iUdg9e20IvpQejvYvvHkVLYH1LsmQ__"
        alt=""
      />
      <h3 className="text-[32px] absolute z-40 top-[45%] text-white text-center w-full leading-[39.01px] font-bold">
        {category}
      </h3>
      <div className="category-card-search">
        <button className="w-[134px] bg-white flex items-center  space-x-1 h-[40px] rounded-[5px] py-[8px] px-[16px]">
          <MdOutlineSearch className="w-[24px] h-[24px]" />
          <h4 className="text-sm font-poppin">Shop Now</h4>
        </button>
      </div>
    </div>
  );
};
const Category = () => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <section className="px-[150px] pt-14 pb-5 flex gap-7 w-full">
      {categories?.map((category, i) => {
        if (i < 3) {
          return <CategoryCard key={category} category={category} />;
        }
      })}
    </section>
  );
};

export default Category;