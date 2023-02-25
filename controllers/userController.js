import User from "../models/userModel.js";

const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      res.status(201).json({
        succeeded: true,
        user,
      });
    } catch (error) {
      res.status(500).json({
        succeeded: false,
        error,
      });
    }
  };

  const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({});
  
      res.status(200).render('users', {
        users,
        link: "users"
      })
    } catch (error) {
      res.status(500).json({
        succeeded: false,
        error,
      });
    }
  };

  const getAUser = async (req, res) => {
    try {
      const user = await User.findById({_id: req.params.id});
  
      res.status(200).render('user', {
        user,
        link: "users"
      })
    } catch (error) {
      res.status(500).json({
        succeeded: false,
        error,
      });
    }
  };

  export {createUser, getAllUsers, getAUser}