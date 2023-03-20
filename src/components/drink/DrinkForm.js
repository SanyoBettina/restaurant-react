import { Form, Input, Modal, Select } from "antd";

const DrinkForm = ({
  open,
  onCancel,
  drinkItem,
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
      <Form
        form={form}
        layout="vertical"
        name="drink"
        initialValues={drinkItem}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input drink name!",
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
              message: "Please input drink price!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="drinkType"
          label="Drink Type"
          rules={[
            {
              required: true,
              message: "Please select an option!",
            },
          ]}
        >
          <Select
            placeholder="Select an option"
            style={{ width: 170 }}
            options={[
              { value: "bottle", label: "bottle" },
              { value: "dose", label: "dose" },
              { value: "cup", label: "cup" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="size"
          label="Size"
          rules={[
            {
              required: true,
              message: "Please input drink size!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default DrinkForm;
