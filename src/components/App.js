import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout,
  Main,
  Button,
  RadioGroup,
  Table, 
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from '@deque/cauldron-react'
import Modal, { ModalContent, ModalFooter } from './Modal'
import Stats from './Stats'
import RecipeCard from '../containers/RecipeCard'
import './App.css'

// TODO: re~move this override~!
/* eslint-disable no-unused-vars */
const App = ({
  recipes,
  stats,
  currentEditModal,
  currentViewModal,
  setCurrentEditModal,
  setCurrentViewModal,
  updateRecipe,
  themeModalActive,
  onThemeSwitchClick,
  onThemeModalSubmit,
  onThemeModalClose,
  currentThemeSelection,
  onThemeChange,
}) => (
  <div className="App">
    <Layout>
      <Main id="main-content" aria-labelledby="main-heading" tabIndex={-1}>
        <h1 id="main-heading">
          Recipe Dashboard <span>(with intentional a11y issues)</span>
        </h1>
        <Stats stats={stats} />
        <div className="Recipes">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={recipe.name}
              recipe={recipe}
              index={index}
              setCurrentEditModal={setCurrentEditModal}
              setCurrentViewModal={setCurrentViewModal}
              updateRecipe={updateRecipe}
              currentEditModal={currentEditModal}
              currentViewModal={currentViewModal}
            />
          ))}
        </div>
        <div className="RecipesTable">
          <h2>Full Recipe Breakdown</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="THead">Name</TableCell>
                <TableCell className="THead">Cook Count</TableCell>
                <TableCell className="THead">Prep Time</TableCell>
                <TableCell className="THead">Cook Time</TableCell>
                <TableCell className="THead">Difficulty</TableCell>
                <TableCell className="THead">Grease Fire Count</TableCell>
                <TableCell className="THead">Yumminess</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipes.map(({
                name, cookCount, prepTime, cookTime, difficulty, greaseFireCount, yumminess
              }) => (
                <TableRow key={name}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{cookCount}</TableCell>
                  <TableCell>{prepTime}</TableCell>
                  <TableCell>{cookTime}</TableCell>
                  <TableCell>{difficulty}</TableCell>
                  <TableCell>{greaseFireCount}</TableCell>
                  <TableCell>{yumminess}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {themeModalActive && (
          <Modal show onClose={onThemeModalClose} heading="Set Theme">
            <form noValidate onSubmit={onThemeModalSubmit}>
              <ModalContent>
                <h2 id="theme-group-label">Theme</h2>
                <RadioGroup
                  aria-labelledby="theme-group-label"
                  onChange={onThemeChange}
                  value={currentThemeSelection}
                  name="theme"
                  radios={[
                    {
                      id: 'light',
                      label: 'Light',
                      value: 'light',
                    },
                    {
                      id: 'dark',
                      label: 'Dark',
                      value: 'dark',
                    },
                  ]}
                />
              </ModalContent>
              <ModalFooter>
                <Button type="submit">Submit</Button>
                <Button variant="secondary" onClick={onThemeModalClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </Modal>
        )}
      </Main>
    </Layout>
  </div>
)

App.propTypes = {
  recipes: PropTypes.array.isRequired,
  stats: PropTypes.array.isRequired,
  currentEditModal: PropTypes.string,
  currentViewModal: PropTypes.string,
  setCurrentEditModal: PropTypes.func.isRequired,
  setCurrentViewModal: PropTypes.func.isRequired,
  updateRecipe: PropTypes.func.isRequired,
  onThemeSwitchClick: PropTypes.func.isRequired,
  onThemeModalSubmit: PropTypes.func.isRequired,
  onThemeModalClose: PropTypes.func.isRequired,
  currentThemeSelection: PropTypes.string.isRequired,
  onThemeChange: PropTypes.func.isRequired,
  themeModalActive: PropTypes.bool.isRequired,
}

export default App
