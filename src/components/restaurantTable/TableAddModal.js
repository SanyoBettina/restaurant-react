import { Form, InputNumber, Modal, Radio, Space } from "antd";

export default function TableAddModal({ open, title, onCancel, onCreate }) {
  const [form] = Form.useForm();
  return (
    <>
      <Modal
        open={open}
        title={title}
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="table">
          <div className="flex">
            <div>
              <Form.Item
                label="Number of tables:"
                name="nrOfTables"
                initialValue={1}
              >
                <InputNumber min={1} max={10} />
              </Form.Item>
            </div>
            <div>
              <Form.Item label="Radio" name="nrOfSeats" initialValue={2}>
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value={2}>2</Radio>
                    <Radio value={4}>4</Radio>
                    <Radio value={6}>6</Radio>
                    <Radio value={8}>8</Radio>
                    <Radio value={10}>10</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}
