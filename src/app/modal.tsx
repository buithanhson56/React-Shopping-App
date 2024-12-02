import React from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const CustomModal = ({
    visible,
    onClose,
    title,
    children,
    animationType = "slide"
}) => {
    return (
        <Modal
            animationType={animationType} // Hiệu ứng mở modal
            transparent={true} // Nền trong suốt
            visible={visible} // Kiểm soát hiển thị
            onRequestClose={onClose} // Xử lý khi nhấn nút "Back" trên Android
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* Tiêu đề */}
                    {title && <Text style={styles.title}>{title}</Text>}

                    {/* Nội dung động */}
                    <View style={styles.body}>
                        {children}
                    </View>

                    {/* Nút đóng */}
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    body: {
        marginBottom: 20,
    },
    closeButton: {
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CustomModal;
