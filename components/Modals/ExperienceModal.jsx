function ExperienceModal({ visible, onClose, onSubmit }) {
    // Form state
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
  
    // Submit form
    const handleSubmit = () => {
      onSubmit({ position, company, location, startDate, endDate });
      onClose();
    };
  
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.modal.centeredView}>
          <View style={styles.modal.modalView}>
            {/* Form fields */}
            <TextInput
              style={styles.modal.input}
              onChangeText={setPosition}
              value={position}
              placeholder="Position Name"
            />
            <TextInput
              style={styles.modal.input}
              onChangeText={setCompany}
              value={company}
              placeholder="Company"
            />
            <TextInput
              style={styles.modal.input}
              onChangeText={setLocation}
              value={location}
              placeholder="Location"
            />
            <TextInput
              style={styles.modal.input}
              onChangeText={setStartDate}
              value={startDate}
              placeholder="Start Date"
            />
            <TextInput
              style={styles.modal.input}
              onChangeText={setEndDate}
              value={endDate}
              placeholder="End Date"
            />
            {/* Buttons */}
            <View style={styles.modal.buttonsContainer}>
              <TouchableOpacity
                style={[styles.modal.button, styles.modal.cancelButton]}
                onPress={onClose}
              >
                <Text style={styles.modal.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modal.button, styles.modal.submitButton]}
                onPress={handleSubmit}
              >
                <Text style={styles.modal.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  
  const styles = {
    // ...other styles...
    modal: StyleSheet.create({
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        width: "80%",
      },
      input: {
        borderWidth: 1,
        borderColor: "#E5E5E5",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        fontSize: 16,
      },
      buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
      },
      button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      cancelButton: {
        backgroundColor: "#E5E5E5",
      },
      submitButton: {
        backgroundColor: "#4B8CD4",
      },
      buttonText: {
        color: "white",
        fontSize: 16,
      },
    }),
  };
  