const Service = require("../models/Service");

// @desc    Get all active services (or all if admin)
// @route   GET /api/services
// @access  Public
const getServices = async (req, res) => {
  try {
    // If we wanted to allow admin to see all, we'd check req.query.all or req.user.isAdmin
    // For now, let's allow fetching all if an ?all=true flag is passed, otherwise only active
    const query = req.query.all === "true" ? {} : { isActive: true };
    const services = await Service.find(query).sort({ createdAt: 1 });
    
    res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Toggle service isActive state
// @route   PUT /api/services/:serviceId/toggle
// @access  Public (Should be restricted to Admin in a real app)
const toggleServiceState = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { isActive } = req.body;

    if (typeof isActive !== 'boolean') {
      return res.status(400).json({
        success: false,
        message: "isActive must be a boolean",
      });
    }

    const service = await Service.findOneAndUpdate(
      { serviceId: serviceId },
      { isActive },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: service,
      message: `Service ${isActive ? 'enabled' : 'disabled'} successfully`,
    });
  } catch (error) {
    console.error("Error toggling service state:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getServices,
  toggleServiceState,
};
