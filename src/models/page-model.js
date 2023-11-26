import mongoose, { Schema } from "mongoose";
/**
 *
 * @model PageSchema cấu hình các trang web dự án
 * - Cho phép PAGE được hiển thị ra bên ngoài hay không thông qua isActive === Boolean
 * - Cho phép PAGE có phải đăng nhập hay không thông qua isPrivate === Boolean
 * - Cấu hình Phân quyền cho PAGE qua ROLE_ID
 *
 * - với page-model khi lấy dữ liệu thì sẽ lấy ra tất cả các component liên quan của chúng
 *
 */
const PageSchema = new Schema(
  {
    page_name: {
      type: String,
      required: true,
      unique: true,
    },
    path: {
      type: String,
      required: true,
      unique: true,
    },
    isPrivate: {
      type: Boolean,
      required: true,
      default: false,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    role_id: {
      type: mongoose.Types.ObjectId,
      ref: "roles",
      required: true,
      autopopulate: { select: "role_name" },
    },
  },
  {
    timestamps: true,
  }
);

// Thêm middleware trước (pre) để kiểm tra isActive và quyết định có autopopulate components hay không
PageSchema.pre("findOne", function (next) {
  if (this.getQuery().isActive) {
    this.populate({
      path: "components",
      select: "component_name path sequence_number",
      match: { isActive: true }, // Điều kiện để lấy chỉ các components có isActive === true
    });
  }
  next();
});

export default mongoose.model("pages", PageSchema);
