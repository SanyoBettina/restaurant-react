import { Form, Input, Modal } from "antd";

const FoodForm = ({
  open,
  onCancel,
  foodItem,
  onCreate,
  resetFields,
  title,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title={title}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            if (resetFields) {
              form.resetFields();
            }
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="food" initialValues={foodItem}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input food name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please input food price!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="weight"
          label="Weight"
          rules={[
            {
              required: true,
              message: "Please input food weight!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default FoodForm;
