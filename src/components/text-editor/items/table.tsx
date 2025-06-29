import React, { useState, useCallback } from "react";
import { Table } from "lucide-react";
import { Popover, Button, Space, Typography, Form, Modal, InputNumber } from "antd";
import type { Editor } from "@tiptap/react";
import { LucideIcon } from "@/components/lucide-icon";
import { useThemeStyles } from "@/hooks/use-theme-styles";

const { Text } = Typography;

interface TableGridProps {
    onInsertTable: (rows: number, cols: number) => void;
    maxRows?: number;
    maxCols?: number;
}

interface TableCellProps {
    isActive: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

interface TableInsertProps {
    editor: Editor;
    maxRows?: number;
    maxCols?: number;
}

interface HoverState {
    rows: number;
    cols: number;
}

const TableCell: React.FC<TableCellProps> = React.memo(({ isActive, onClick, onMouseEnter, onMouseLeave }) => {
    const { colors } = useThemeStyles();
    const { primary } = colors;

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            className="table-cell"
            style={{
                width: 20,
                height: 20,
                margin: 1,
                backgroundColor: isActive ? primary : "#f5f5f5",
                border: `1px solid ${isActive ? primary : "#d9d9d9"}`,
                borderRadius: 4,
                cursor: "pointer",
                transition: "all 0.2s ease",
            }}
        />
    );
});

TableCell.displayName = "TableCell";

const TableGrid: React.FC<TableGridProps> = ({
    onInsertTable,
    maxRows = 6,
    maxCols = 6
}) => {
    const [hover, setHover] = useState<HoverState>({ rows: 0, cols: 0 });
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();
    const { colors } = useThemeStyles();
    const { text } = colors;

    const handleCellHover = useCallback((rowIndex: number, colIndex: number) => {
        setHover({ rows: rowIndex + 1, cols: colIndex + 1 });
    }, []);

    const handleCellClick = useCallback((rowIndex: number, colIndex: number) => {
        onInsertTable(rowIndex + 1, colIndex + 1);
    }, [onInsertTable]);

    const handleModalOk = useCallback(() => {
        form
            .validateFields()
            .then((values) => {
                onInsertTable(values.rows, values.cols);
                setModalVisible(false);
                form.resetFields();
            })
    }, [form, onInsertTable]);

    const handleModalCancel = useCallback(() => {
        setModalVisible(false);
        form.resetFields();
    }, [form]);

    const handleCustomTableClick = useCallback(() => {
        setModalVisible(true);
    }, []);

    const displayText = hover.rows && hover.cols
        ? `${hover.rows} × ${hover.cols} table`
        : "Select table size";

    return (
        <>
            <Space direction="vertical" size="small" style={{ padding: 12 }}>
                <Text
                    style={{
                        textAlign: "center",
                        display: "block",
                        fontSize: 12,
                        color: text,
                        minHeight: 16,
                    }}
                >
                    {displayText}
                </Text>

                <div style={{ userSelect: "none" }}>
                    {Array.from({ length: maxRows }, (_, rowIndex) => (
                        <div
                            key={`row-${rowIndex}`}
                            style={{ display: "flex" }}
                        >
                            {Array.from({ length: maxCols }, (_, colIndex) => {
                                const isActive = rowIndex < hover.rows && colIndex < hover.cols;
                                return (
                                    <TableCell
                                        key={`cell-${rowIndex}-${colIndex}`}
                                        isActive={isActive}
                                        onMouseEnter={() => handleCellHover(rowIndex, colIndex)}
                                        onMouseLeave={() => setHover({ rows: 0, cols: 0 })}
                                        onClick={() => handleCellClick(rowIndex, colIndex)}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* TODO: Add custom table button */}
                {/* <Button
                    type="link"
                    size="small"
                    style={{
                        padding: 0,
                        height: "auto",
                        fontSize: 12,
                        color: text,
                    }}
                    onClick={handleCustomTableClick}
                >
                    Insert custom table
                </Button> */}
            </Space>

            <Modal
                title="Insert Custom Table"
                open={modalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                okText="Insert"
                cancelText="Cancel"
                width={400}
                destroyOnClose
            >
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ rows: 3, cols: 3 }}
                >
                    <Form.Item
                        label="Number of Rows"
                        name="rows"
                        rules={[
                            { required: true, message: "Please input number of rows!" },
                            { type: "number", min: 1, max: 50, message: "Rows must be between 1 and 50" }
                        ]}
                    >
                        <InputNumber
                            min={1}
                            max={50}
                            style={{ width: "100%" }}
                            placeholder="Enter number of rows"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Number of Columns"
                        name="cols"
                        rules={[
                            { required: true, message: "Please input number of columns!" },
                            { type: "number", min: 1, max: 20, message: "Columns must be between 1 and 20" }
                        ]}
                    >
                        <InputNumber
                            min={1}
                            max={20}
                            style={{ width: "100%" }}
                            placeholder="Enter number of columns"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

const TableInsert: React.FC<TableInsertProps> = ({
    editor,
    maxRows = 6,
    maxCols = 6
}) => {
    const [popoverVisible, setPopoverVisible] = useState(false);

    const handleInsertTable = useCallback((rows: number, cols: number) => {
        try {
            editor
                .chain()
                .focus()
                .insertTable({
                    rows,
                    cols,
                    withHeaderRow: true,
                })
                .run();

            setPopoverVisible(false);
        } catch (error) {
            console.error("Failed to insert table:", error);
        }
    }, [editor]);

    const handleVisibleChange = useCallback((visible: boolean) => {
        setPopoverVisible(visible);
    }, []);

    return (
        <Popover
            content={
                <TableGrid
                    onInsertTable={handleInsertTable}
                    maxRows={maxRows}
                    maxCols={maxCols}
                />
            }
            trigger={["click"]}
            placement="bottom"
            open={popoverVisible}
            onOpenChange={handleVisibleChange}
            overlayStyle={{ zIndex: 9999 }}
            getPopupContainer={() => document.body}
            arrow={false}
        >
            <Button
                icon={<LucideIcon Icon={Table} />}
                type="text"
                size="small"
            />
        </Popover>
    );
};

export default TableInsert;
export { TableInsert };

export const renderTable = (props: TableInsertProps) => <TableInsert {...props} />;